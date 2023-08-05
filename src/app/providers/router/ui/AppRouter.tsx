import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routerConfig/routerConfig'
import { PageLoader } from 'widgets/PageLoader/PageLoader'

const AppRouter = () => {
  return (
      <Suspense fallback={<PageLoader />}>
          <Routes>
              {Object.values(routeConfig).map((route) => (
                  <Route
                      key={route.path}
                      element={<div className="page-wrapper">{route.element}</div>}
                      path={route.path}
                    />
              ))}
          </Routes>
      </Suspense>
  )
}

export default AppRouter
