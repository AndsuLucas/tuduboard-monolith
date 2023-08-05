export type CommonViewData = {
  auth: { user: object | null | undefined },
  errors: {},
  ziggy: { routes: { [key: string]: { uri: string } } }
}
