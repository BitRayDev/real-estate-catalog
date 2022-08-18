const routesWithLayouts = [
  {
    matcher: /^\/cabinet\/.*$/g,
    layout: "cabinet"
  },
  {
    matcher: /^\/admin\/.*$/g,
    layout: "admin"
  },
]

export default defineNuxtRouteMiddleware((to, from) => {
  if (to.meta.layout)
    return;

  for (let route of routesWithLayouts) {
    if (to.fullPath.match(route.matcher)) {
      to.meta.layout = route.layout;
    }
  }
})