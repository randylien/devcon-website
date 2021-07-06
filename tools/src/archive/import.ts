import { ArchiveVideo } from '../../../src/types/ArchiveVideo';
import { getVideoId } from '../../../src/utils/video'
import fetch from 'node-fetch';
import moment from 'moment'
const GSheetReader: any = require('g-sheets-api');
const slugify = require('slugify')
const fs = require('fs');
require('dotenv').config()

const generatePlaylist = false
const archiveDir = '../src/content/archive/videos'
const sheet = process.env.SHEET_ID
const sheetNr = 0 // 
const edition = 4 // 
console.log('Importing edition', edition, 'from', sheetNr, 'to', archiveDir)

GSheetReader(
  {
    sheetId: sheet,
    sheetNumber: sheetNr,
  },
  (results: any) => {
    console.log('Records found', results.length)

    const videos: Array<ArchiveVideo> = []
    results.forEach(async (result: any, index: number) => {
      // console.log('Processing video..', result['Talk Name'])
      let duration = 0
      if (result['Video URL']) {
        const id = getVideoId(result['Video URL'])
        duration = await getVideoDuration(id)
      }

      const tags = result['Tags'] ? result['Tags'].split(',') : []
      tags.push(result['Track'])

      let ipfsHash = result['IPFS Hash'] as string
      ipfsHash = ipfsHash.replace('https://ipfs.ethdevops.io/ipfs/', '')
      ipfsHash = ipfsHash.includes('?') ? ipfsHash.split('?')[0] : ipfsHash

      const video = { 
        edition: edition,
        title: result['Talk Name'],
        description: result['Talk Description'],
        youtubeUrl: result['Video URL'],
        ipfsHash: ipfsHash,
        duration: duration,
        expertise: result['Skill Level'],
        type: result['Type (Talk, Panel, Workshop, Other)'],
        track: result['Track'],
        keywords: result['Keywords'] ? result['Keywords'].split(',') : undefined,
        tags: tags,
        speakers: result['Talk Speaker(s)'] ? result['Talk Speaker(s)'].split(',') : undefined
      } as ArchiveVideo

      videos.push(video)
      writeToFile(video)
    })

    if (generatePlaylist) {
      // Writing playlist file to edition directory. Still need to process (copy/paste) to any playlists
      const editionDir = archiveDir + '/' + edition
      const videoPaths = videos.map(i => i.edition + '/' + slugify(i.title.toLowerCase(), { strict: true }) + '/index')
      fs.writeFileSync(editionDir + '/playlist.md', '- ' + videoPaths.join('\n- '));
    }
  },
  (error: any) => {
    console.log('Unable to fetch sheet results..')
    console.error(error)
  }
)

async function getVideoDuration(id: string): Promise<number> { 
  const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${id}&part=contentDetails&key=${process.env.YOUTUBE_API_KEY}`);
  const body = await response.json();
  const duration = body?.items?.length > 0 ? body.items[0].contentDetails.duration : 0
  return moment.duration(duration).asSeconds();
}

function writeToFile(video: ArchiveVideo) { 
    const editionDir = archiveDir + '/' + video.edition
    if (!fs.existsSync(editionDir)) {
        console.log('Create dir', editionDir)
        fs.mkdirSync(editionDir);
    }

    const folderName = slugify(video.title.toLowerCase(), { strict: true }) 
    const videoDir = editionDir + '/' + folderName 
    if (!fs.existsSync(videoDir)) {
        console.log('Create dir', videoDir)
        fs.mkdirSync(videoDir);
    }

    const attributes = Object.entries(video)
    const markdown = `---${attributes.reduce((acc, [key, value], index) => {
        if (typeof value === 'undefined' && key === 'keywords') return acc += `\n${key}: []`
        if (typeof value === 'undefined' && key === 'tags') return acc += `\n${key}: []`
        if (typeof value === 'undefined') return acc += `\n${key}: ''`
        if (typeof value === 'number') return acc += `\n${key}: ${value}`
        if (typeof value === 'string') {
          let stringValue = value.trim().replace(/[\""]/g, '\\"');
          return acc += `\n${key}: "${stringValue}"`
        }
        if (typeof value === 'object' && Array.isArray(value)) {
          return acc += `\n${key}: [${value.map(item => `'${item}'`)}]`
        } 

        return acc += `\n${key}: '${value}'`;
    }, '')}\n---\n`;

    fs.writeFileSync(videoDir + '/index.md', markdown);
}
