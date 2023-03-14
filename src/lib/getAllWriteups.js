import glob from 'fast-glob'
import * as path from 'path'

async function importWriteup(writeupCategory, writeupFilename) {
  let { meta, default: component } = await import(
    `../pages/writeups/${writeupCategory}/${writeupFilename}`
  )
  return {
    slug: writeupFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllWriteups(writeupCategory) {
  let writeupFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), `src/pages/writeups/${writeupCategory}`),
  })

  let writeups = await Promise.all(writeupFilenames.map((filename)=>{return importWriteup(writeupCategory,filename)}))

  return writeups.sort((a, z) => new Date(z.date) - new Date(a.date))
}
