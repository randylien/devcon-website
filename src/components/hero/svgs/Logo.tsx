import React from 'react'

type Props = {
  [key: string]: any
}

export default React.memo((props: Props) => {
  return (
    <svg {...props} viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" id="logo">
      <rect width="500" height="500" fill="url(#paint0_radial)" />
      <path
        d="M164.416 416.591C164.416 412.47 167.561 409.464 171.802 409.464C173.951 409.464 175.822 410.201 177.097 411.635L175.802 412.888C174.727 411.754 173.414 411.236 171.881 411.236C168.736 411.236 166.407 413.506 166.407 416.591C166.407 419.676 168.736 421.946 171.881 421.946C173.414 421.946 174.728 421.409 175.802 420.274L177.097 421.529C175.822 422.962 173.951 423.718 171.782 423.718C167.561 423.717 164.416 420.711 164.416 416.591Z"
        fill="white"
      />
      <path
        d="M182.492 416.591C182.492 412.51 185.638 409.464 189.918 409.464C194.158 409.464 197.303 412.491 197.303 416.591C197.303 420.691 194.158 423.717 189.918 423.717C185.638 423.717 182.492 420.671 182.492 416.591ZM195.312 416.591C195.312 413.505 193.003 411.236 189.917 411.236C186.791 411.236 184.482 413.506 184.482 416.591C184.482 419.676 186.791 421.946 189.917 421.946C193.003 421.946 195.312 419.677 195.312 416.591Z"
        fill="white"
      />
      <path d="M204.333 409.624H206.323V421.827H213.867V423.558H204.332V409.624H204.333Z" fill="white" />
      <path
        d="M218.746 416.591C218.746 412.51 221.891 409.464 226.172 409.464C230.412 409.464 233.557 412.491 233.557 416.591C233.557 420.691 230.412 423.717 226.172 423.717C221.891 423.717 218.746 420.671 218.746 416.591ZM231.567 416.591C231.567 413.505 229.257 411.236 226.172 411.236C223.046 411.236 220.737 413.506 220.737 416.591C220.737 419.676 223.046 421.946 226.172 421.946C229.257 421.946 231.567 419.677 231.567 416.591Z"
        fill="white"
      />
      <path
        d="M253.505 423.558L253.485 413.406L248.448 421.866H247.533L242.497 413.465V423.557H240.586V409.623H242.218L248.031 419.417L253.764 409.623H255.396L255.416 423.557H253.505V423.558Z"
        fill="white"
      />
      <path
        d="M275.562 419.796C275.562 422.185 273.751 423.558 270.227 423.558H263.578V409.624H269.829C273.034 409.624 274.826 410.977 274.826 413.227C274.826 414.74 274.049 415.795 272.955 416.333C274.527 416.77 275.562 417.944 275.562 419.796ZM265.569 411.236V415.696H269.65C271.68 415.696 272.835 414.939 272.835 413.466C272.835 411.992 271.68 411.236 269.65 411.236H265.569ZM273.551 419.637C273.551 418.024 272.356 417.308 270.147 417.308H265.568V421.947H270.147C272.357 421.946 273.551 421.249 273.551 419.637Z"
        fill="white"
      />
      <path d="M282.631 409.624H284.621V423.558H282.631V409.624Z" fill="white" />
      <path
        d="M301.662 420.074H294.257L292.724 423.557H290.674L296.984 409.623H298.955L305.286 423.557H303.196L301.662 420.074ZM300.965 418.482L297.959 411.654L294.953 418.482H300.965Z"
        fill="white"
      />
      <path
        d="M69 365.524H78.5268C85.7937 365.524 90.7346 370.11 90.7346 376.828C90.7346 383.545 85.7946 388.131 78.5268 388.131H69V365.524ZM78.3333 385.32C83.9208 385.32 87.5052 381.897 87.5052 376.827C87.5052 371.756 83.9208 368.333 78.3333 368.333H72.2294V385.32H78.3333Z"
        fill="white"
      />
      <path
        d="M118.544 385.32V388.13H102.139V365.524H118.092V368.334H105.368V375.278H116.704V378.022H105.368V385.32H118.544Z"
        fill="white"
      />
      <path
        d="M149.548 365.524L139.634 388.13H136.437L126.49 365.524H129.977L138.116 384.094L146.318 365.524H149.548Z"
        fill="white"
      />
      <path
        d="M156.818 376.827C156.818 370.142 161.921 365.265 168.8 365.265C172.287 365.265 175.323 366.46 177.39 368.786L175.29 370.82C173.547 368.979 171.416 368.14 168.929 368.14C163.827 368.14 160.049 371.82 160.049 376.827C160.049 381.833 163.827 385.513 168.929 385.513C171.416 385.513 173.548 384.642 175.29 382.801L177.39 384.835C175.324 387.16 172.288 388.388 168.767 388.388C161.921 388.388 156.818 383.512 156.818 376.827Z"
        fill="white"
      />
      <path
        d="M186.145 376.827C186.145 370.206 191.247 365.265 198.191 365.265C205.07 365.265 210.172 370.174 210.172 376.827C210.172 383.479 205.07 388.388 198.191 388.388C191.247 388.388 186.145 383.447 186.145 376.827ZM206.943 376.827C206.943 371.82 203.196 368.14 198.191 368.14C193.121 368.14 189.375 371.82 189.375 376.827C189.375 381.833 193.121 385.513 198.191 385.513C203.197 385.513 206.943 381.833 206.943 376.827Z"
        fill="white"
      />
      <path
        d="M241.016 365.524V388.13H238.368L224.804 371.273V388.13H221.574V365.524H224.223L237.786 382.381V365.524H241.016Z"
        fill="white"
      />
      <path
        d="M280.057 378.47C280.789 379.418 281.156 380.56 281.156 381.895C281.156 383.876 280.336 385.411 278.699 386.497C277.064 387.585 274.694 388.13 271.593 388.13H258.865V365.516H270.947C273.963 365.516 276.239 366.055 277.78 367.132C279.32 368.209 280.089 369.64 280.089 371.428C280.089 372.484 279.826 373.432 279.298 374.272C278.769 375.112 277.989 375.79 276.956 376.307C278.291 376.802 279.325 377.523 280.057 378.47ZM266.361 370.846V374.207H269.915C271.572 374.207 272.402 373.647 272.402 372.527C272.402 371.408 271.572 370.847 269.915 370.847H266.361V370.846ZM273.467 381.023C273.467 379.838 272.627 379.246 270.947 379.246H266.361V382.8H270.947C272.627 382.799 273.467 382.207 273.467 381.023Z"
        fill="white"
      />
      <path
        d="M294.95 387.128C293.012 386.116 291.494 384.711 290.395 382.912C289.297 381.114 288.748 379.083 288.748 376.823C288.748 374.562 289.297 372.532 290.395 370.734C291.494 368.936 293.012 367.53 294.95 366.518C296.889 365.506 299.074 365 301.508 365C303.942 365 306.128 365.506 308.065 366.518C310.004 367.53 311.522 368.936 312.62 370.734C313.719 372.532 314.268 374.562 314.268 376.823C314.268 379.083 313.719 381.114 312.62 382.912C311.522 384.711 310.004 386.116 308.065 387.128C306.127 388.139 303.942 388.646 301.508 388.646C299.074 388.646 296.889 388.14 294.95 387.128ZM304.077 381.781C304.841 381.319 305.449 380.662 305.902 379.811C306.355 378.961 306.581 377.965 306.581 376.823C306.581 375.681 306.355 374.685 305.902 373.835C305.45 372.984 304.841 372.327 304.077 371.864C303.311 371.401 302.456 371.17 301.508 371.17C300.56 371.17 299.704 371.401 298.939 371.864C298.175 372.327 297.567 372.984 297.114 373.835C296.662 374.685 296.435 375.681 296.435 376.823C296.435 377.965 296.662 378.961 297.114 379.811C297.566 380.662 298.175 381.319 298.939 381.781C299.704 382.245 300.56 382.476 301.508 382.476C302.456 382.476 303.311 382.245 304.077 381.781Z"
        fill="white"
      />
      <path
        d="M337.817 376.209H344.44V385.772C343.104 386.698 341.553 387.408 339.788 387.904C338.022 388.399 336.288 388.647 334.587 388.647C332.174 388.647 330.009 388.147 328.093 387.144C326.177 386.142 324.674 384.743 323.587 382.945C322.5 381.147 321.955 379.107 321.955 376.823C321.955 374.541 322.499 372.501 323.587 370.702C324.674 368.904 326.193 367.504 328.142 366.503C330.09 365.501 332.293 365.001 334.748 365.001C336.967 365.001 338.953 365.373 340.708 366.116C342.462 366.859 343.922 367.941 345.085 369.361L340.207 373.658C338.786 372 337.095 371.171 335.135 371.171C333.456 371.171 332.12 371.677 331.13 372.689C330.139 373.701 329.644 375.079 329.644 376.823C329.644 378.525 330.134 379.892 331.115 380.927C332.094 381.961 333.403 382.478 335.039 382.478C336.008 382.478 336.934 382.295 337.817 381.928V376.209Z"
        fill="white"
      />
      <path
        d="M358.813 387.128C356.875 386.116 355.357 384.711 354.259 382.912C353.161 381.114 352.611 379.083 352.611 376.823C352.611 374.562 353.161 372.532 354.259 370.734C355.357 368.936 356.875 367.53 358.813 366.518C360.752 365.506 362.938 365 365.371 365C367.805 365 369.991 365.506 371.928 366.518C373.867 367.53 375.385 368.936 376.483 370.734C377.582 372.532 378.131 374.562 378.131 376.823C378.131 379.083 377.582 381.114 376.483 382.912C375.385 384.711 373.867 386.116 371.928 387.128C369.99 388.139 367.805 388.646 365.371 388.646C362.938 388.646 360.752 388.14 358.813 387.128ZM367.94 381.781C368.705 381.319 369.313 380.662 369.766 379.811C370.218 378.961 370.444 377.965 370.444 376.823C370.444 375.681 370.218 374.685 369.766 373.835C369.313 372.984 368.705 372.327 367.94 371.864C367.174 371.401 366.319 371.17 365.371 371.17C364.424 371.17 363.567 371.401 362.803 371.864C362.038 372.327 361.43 372.984 360.977 373.835C360.525 374.685 360.298 375.681 360.298 376.823C360.298 377.965 360.525 378.961 360.977 379.811C361.429 380.662 362.038 381.319 362.803 381.781C363.567 382.245 364.424 382.476 365.371 382.476C366.319 382.476 367.175 382.245 367.94 381.781Z"
        fill="white"
      />
      <path
        d="M391.313 371.428H384.689V365.516H405.557V371.428H398.935V388.129H391.312V371.428H391.313Z"
        fill="white"
      />
      <path
        d="M427.623 384.188H419.029L417.511 388.13H409.758L419.643 365.516H427.138L437.023 388.13H429.141L427.623 384.188ZM425.523 378.697L423.326 373.011L421.129 378.697H425.523Z"
        fill="white"
      />
      <path d="M431.498 191.947H408.648V264.746H408.649H431.498H454.348V191.947H431.498Z" fill="#1C63AD" />
      <path
        d="M309.039 191.947L331.889 231.523L354.739 264.746L377.588 231.523H377.588L400.438 191.947H354.739H309.039Z"
        fill="#1C63AD"
      />
      <path
        d="M145.853 191.933L123 231.517L145.853 264.746H191.56L168.707 231.517L191.56 191.933H145.853Z"
        fill="#1C63AD"
      />
      <path
        d="M194.445 226.108L205.633 233.233L216.82 240.357L250.381 261.733L272.756 247.483L306.317 226.108L250.381 129L194.445 226.108Z"
        fill="#1C63AD"
      />
      <path
        d="M286.775 250.009L250.402 273.175L234.002 262.681L234.03 262.723L214.162 250.009L214.214 250.084L194.705 237.601L250.38 319.31L306.316 237.601L286.73 250.075L286.775 250.009Z"
        fill="#1C63AD"
      />
      <path opacity="0.75" d="M401.073 276.415V275.848L400.746 276.415H401.073Z" fill="#214290" />
      <path d="M431.498 191.947H408.648V264.746H431.498H454.348V191.947H431.498Z" fill="#07AED1" />
      <path d="M400.746 276.415H401.073V275.848L400.746 276.415Z" fill="#0075A2" />
      <path d="M331.889 231.523L354.739 191.947H309.039L331.889 231.523Z" fill="#07AED1" />
      <path d="M377.588 231.523L400.437 191.947H354.738L377.588 231.523Z" fill="#214290" />
      <path d="M354.738 191.947L331.889 231.523H377.588L354.738 191.947Z" fill="#1D6EAD" />
      <path d="M354.738 264.746L377.588 231.523H331.889L354.738 264.746Z" fill="#214290" />
      <path d="M168.707 231.517L191.56 191.933H145.854L168.707 231.517Z" fill="#1D6EAD" />
      <path d="M145.854 191.933L123 231.517H168.707L145.854 191.933Z" fill="#07AED1" />
      <path d="M145.854 264.746L168.707 231.517H123L145.854 264.746Z" fill="#1D6EAD" />
      <path d="M168.707 231.517L145.854 264.746H191.56L168.707 231.517Z" fill="#214290" />
      <path d="M194.445 226.108L250.381 261.733V129L194.445 226.108Z" fill="#07AED1" />
      <path d="M306.317 226.108L250.381 261.733V129L306.317 226.108Z" fill="#214290" />
      <path d="M205.633 233.232L250.381 261.733V155.547L205.633 233.232Z" fill="#E32227" />
      <path d="M295.129 233.232L250.381 261.733V155.547L295.129 233.232Z" fill="#7F141C" />
      <path d="M216.82 240.357L250.382 261.733V182.094L216.82 240.357Z" fill="#FBCD0B" />
      <path d="M283.943 240.357L250.381 261.733V182.094L283.943 240.357Z" fill="#F68D1E" />
      <path d="M228.008 247.483L250.382 261.733V208.64L228.008 247.483Z" fill="#FBCD0B" />
      <path d="M272.755 247.483L250.381 261.733V208.64L272.755 247.483Z" fill="#F68D1E" />
      <path d="M306.317 237.601L250.381 319.31V273.226L306.317 237.601Z" fill="#214290" />
      <path d="M194.705 237.601L250.381 319.31V273.226L194.705 237.601Z" fill="#07AED1" />
      <path d="M286.776 250.009L250.385 303.167V273.187L286.776 250.009Z" fill="#7F141C" />
      <path d="M214.164 250.009L250.386 303.167V273.187L214.164 250.009Z" fill="#E32227" />
      <path d="M266.882 262.681L250.404 286.751V273.176L266.882 262.681Z" fill="#F68D1E" />
      <path d="M234.004 262.681L250.405 286.751V273.176L234.004 262.681Z" fill="#FBCD0B" />
      <g style={{ mixBlendMode: 'overlay' }}>
        <path opacity="0.75" d="M250.382 261.733L258.027 248.459H242.736L250.382 261.733Z" fill="white" />
        <path opacity="0.75" d="M250.382 208.64L258.027 195.367H242.736L250.382 208.64Z" fill="white" />
        <path opacity="0.75" d="M258.026 221.913L265.672 208.64H250.381L258.026 221.913Z" fill="white" />
        <path opacity="0.75" d="M273.317 221.913L280.963 208.64H265.672L273.317 221.913Z" fill="white" />
        <path opacity="0.75" d="M265.673 235.186L273.319 221.913H258.027L265.673 235.186Z" fill="white" />
        <path opacity="0.75" d="M258.026 248.459L265.672 235.186H250.381L258.026 248.459Z" fill="white" />
        <path opacity="0.75" d="M242.736 248.459L250.381 235.186H235.09L242.736 248.459Z" fill="white" />
        <path opacity="0.75" d="M227.444 221.913L219.799 208.64H235.09L227.444 221.913Z" fill="white" />
        <path opacity="0.75" d="M235.089 235.186L227.443 221.913H242.735L235.089 235.186Z" fill="white" />
        <path opacity="0.75" d="M242.736 221.913L235.09 208.64H250.381L242.736 221.913Z" fill="white" />
        <path opacity="0.75" d="M258.026 195.367L265.672 182.094H250.381L258.026 195.367Z" fill="white" />
        <path opacity="0.75" d="M242.736 195.367L235.09 182.094H250.381L242.736 195.367Z" fill="white" />
      </g>
      <path d="M45.6504 191.933V264.746L68.5038 228.339L45.6504 191.933Z" fill="#07AED1" />
      <path d="M68.5038 191.933H45.6504L68.5038 228.339L91.3572 191.933H68.5038Z" fill="#1D6EAD" />
      <path d="M68.5038 228.34V228.339L45.6504 264.746H68.5038H91.3578L68.5038 228.34Z" fill="#1D6EAD" />
      <path
        d="M91.3573 191.933L68.5039 228.339V228.34L91.3579 264.746L114.211 231.516L91.3573 191.933Z"
        fill="#214290"
      />
      <path d="M431.498 228.346L408.648 264.746H454.348L453.193 262.906L431.498 228.346Z" fill="#1D6EAD" />
      <path d="M454.348 191.947H408.648L431.498 228.346L453.193 193.786L454.348 191.947Z" fill="#1D6EAD" />
      <path
        d="M453.193 193.786L431.498 228.346L453.193 262.906L454.348 264.746V191.947L453.193 193.786Z"
        fill="#214290"
      />
      <defs>
        <radialGradient
          id="paint0_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(250 250) rotate(90) scale(250)"
        >
          <stop stopColor="white" />
          <stop offset="0.0001" stopColor="white" stopOpacity="0.8" />
          <stop offset="0.911458" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  )
})
