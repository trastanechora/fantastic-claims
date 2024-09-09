export async function register() {
  // this is to run env checker upon starting server
  await import('./helpers/env');
}
