import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { Page } from 'types/Page'
import { Tag } from 'types/Tag'
import { BASE_CONTENT_FOLDER } from 'utils/constants'
import { DIP } from 'types/DIP'
import { NewsItem } from 'types/NewsItem'
import { Category } from 'types/Category'
import { FAQ } from 'types/FAQ'
import markdownUtils from 'utils/markdown'

export async function GetPage(slug: string, lang: string = 'en'): Promise<Page | undefined> {
  if (lang !== 'es') lang = 'en'

  try {
    const filePath = join(process.cwd(), BASE_CONTENT_FOLDER, 'pages', lang, slug + '.md')
    const content = await fs.promises.readFile(filePath, 'utf8')

    if (!content) {
      console.log('File has no content..', filePath)
      return undefined
    }

    const doc = matter(content)
    const allTags = GetTags(lang)
    const tags: Array<string> = doc.data.tags ?? []

    const page = {
      ...doc.data,
      body: doc.content,
      lang: lang,
      id: slug,
      slug: `/${slug}`,
      tags: tags.map(i => allTags.find(x => x.slug === i)).filter(i => !!i),
    } as Page

    if (page.body) page.body = await markdownUtils.toHtml(page.body)

    return page
  } catch (e) {
    // page not found
  }
}

export function GetPages(lang: string = 'en'): Array<Page> {
  if (lang !== 'es') lang = 'en'

  const dir = join(process.cwd(), BASE_CONTENT_FOLDER, 'pages', lang)
  return fs
    .readdirSync(dir)
    .map(i => {
      const content = fs.readFileSync(join(dir, i), 'utf8')
      if (!content) {
        console.log('File has no content..', i)
        return undefined
      }

      const doc = matter(content)
      const allTags = GetTags(lang)
      const tags: Array<string> = doc.data.tags ?? []
      return {
        ...doc.data,
        lang: lang,
        id: i.replace('.md', '').toLowerCase(),
        slug: `/${i.replace('.md', '').toLowerCase()}`,
        tags: tags.map(i => allTags.find(x => x.slug === i)).filter(i => !!i),
      } as Page
    })
    .filter(i => !!i) as Array<Page>
}

export async function GetDIPs(lang: string = 'en'): Promise<Array<DIP>> {
  if (lang !== 'es') lang = 'en'

  const dir = join(process.cwd(), BASE_CONTENT_FOLDER, 'dips', lang)
  const allDips = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter(i => i.isFile() && i.name.endsWith('.md'))
    .map(i => Number(i.name.replace('.md', '').replace('DIP-', '')))
    .sort((a, b) => a - b)

  const dipsDir = await fs.promises.readdir(dir)

  let dips = (await Promise.all(
    dipsDir.map(async i => {
      const content = fs.readFileSync(join(dir, i), 'utf8')
      if (!content) {
        console.log('File has no content..', i)
        return undefined
      }

      const currentIndex = allDips.indexOf(Number(i.replace('.md', '').replace('DIP-', '')))
      const prevDip = currentIndex > 0 ? `/${lang}/dips/dip-${allDips[currentIndex - 1]}` : `/${lang}/dips/`
      const nextDip =
        currentIndex < allDips.length ? `/${lang}/dips/dip-${allDips[currentIndex + 1]}` : `/${lang}/dips/`

      const doc = matter(content)

      return {
        number: doc.data.DIP,
        title: doc.data.Title,
        summary: doc.data.Summary,
        status: doc.data.Status,
        github: doc.data['Github URL'],
        themes: doc.data.Themes ? doc.data.Themes.split(',') : [],
        tags: doc.data.Tags ? doc.data.Tags.split(',') : [],
        authors: doc.data.Authors ? doc.data.Authors.split(',') : [],
        resources: doc.data['Resources Required'] ?? '',
        discussion: doc.data.Discussion,
        created: doc.data.Created ? new Date(doc.data.Created).getTime() : 0,
        body: await markdownUtils.toHtml(doc.content), //doc.content,
        slug: i.replace('.md', '').toLowerCase(),
        next_dip: nextDip,
        prev_dip: prevDip,
      } as DIP
    })
  )) as Array<DIP>

  dips = dips.filter(i => !!i)

  // Parse markdown into html
  await Promise.all(
    dips.map(async dip => {
      if (dip.body) {
        const bodyHtml = await markdownUtils.toHtml(dip.body)

        dip.body = bodyHtml
      }

      if (dip.summary) {
        const summaryHtml = await markdownUtils.toHtml(dip.summary, 255)

        dip.summary = summaryHtml
      }
    })
  )

  return dips
}

export async function GetCategories(lang: string = 'en'): Promise<Array<Category>> {
  if (lang !== 'es') lang = 'en'

  const dir = join(process.cwd(), BASE_CONTENT_FOLDER, 'categories', lang)
  const faqs = await GetFAQ(lang)

  return fs
    .readdirSync(dir)
    .map(i => {
      const content = fs.readFileSync(join(dir, i), 'utf8')
      if (!content) {
        console.log('File has no content..', i)
        return undefined
      }

      const doc = matter(content)
      const id = i.replace('.md', '').toLowerCase()
      return {
        id: id,
        title: doc.data.title,
        questions: faqs.filter(x => x.category?.id === id),
      } as Category
    })
    .filter(i => !!i) as Array<Category>
}

export async function GetFAQ(lang: string = 'en'): Promise<Array<FAQ>> {
  if (lang !== 'es') lang = 'en'

  const dir = join(process.cwd(), BASE_CONTENT_FOLDER, 'faq', lang)

  const directoryRead = await fs.promises.readdir(dir)

  const allFAQs = await Promise.all(
    directoryRead.map(async (fileName: string): Promise<FAQ | undefined> => {
      const content = fs.readFileSync(join(dir, fileName), 'utf8')
      if (!content) {
        console.log('File has no content..', fileName)
        return undefined
      }

      const doc = matter(content)

      const singleFaq = {
        ...doc.data,
        id: fileName.replace('.md', '').toLowerCase(),
        title: doc.data.title,
        body: await markdownUtils.toHtml(doc.content),
        order: doc.data.order ?? undefined,
        category: { id: doc.data.category },
      } as FAQ

      return singleFaq
    })
  )

  const filtered = allFAQs.filter(FAQ => !!FAQ) as FAQ[]

  return filtered
}

export function GetTags(lang: string = 'en'): Array<Tag> {
  if (lang !== 'es') lang = 'en'

  const dir = join(process.cwd(), BASE_CONTENT_FOLDER, 'tags', lang)

  return fs
    .readdirSync(dir)
    .map(i => {
      const content = fs.readFileSync(join(dir, i), 'utf8')
      if (!content) {
        console.log('File has no content..', i)
        return undefined
      }

      const doc = matter(content)
      return {
        ...doc.data,
        id: i.replace('.md', '').toLowerCase(),
        slug: i.replace('.md', '').toLowerCase(),
        title: doc.data.title,
        lang: lang,
      } as Tag
    })
    .filter(i => !!i) as Array<Tag>
}

export async function GetContentSection(slug: string, lang: string = 'en'): Promise<any> {
  if (lang !== 'es') lang = 'en'

  const filePath = join(process.cwd(), BASE_CONTENT_FOLDER, 'sections', lang, slug + '.md')

  let content

  try {
    content = await fs.promises.readFile(filePath, 'utf8')
  } catch (e) {
    // file not found.. ignore
  }

  if (!content) {
    console.log('File not found..', filePath)
    return []
  }

  const doc = matter(content)

  return doc
}
