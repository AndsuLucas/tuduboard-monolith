export type CommonViewData = {
  auth: { user: object | null | undefined },
  errors: object,
  ziggy: { routes: { [key: string]: { uri: string } } }
}
