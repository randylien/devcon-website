import React from 'react'

const LazyConnectComponent = React.lazy(() =>
  import("../../components/Connect")
)

export default function Index() {
  const isBrowser = typeof window !== "undefined"

  return (
    <div>
      <h2>Login</h2>

      {isBrowser && (
          <React.Suspense fallback={<div />}>
            <LazyConnectComponent />
          </React.Suspense>
      )}
    </div>
  )
}
