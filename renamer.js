const fs = require('fs')
const path = require('path')

main(process.argv.slice(2))

async function main(files) {
  for (let file of files) {
    const currentDir = path.join(__dirname, `/build/${file}`)
    const currentPath = path.join(__dirname, `/build/${file}/index.html`)
    const newPath = path.join(__dirname, `/build`, file)

    await renameFile(currentPath, newPath + '-temp')
    await deleteFolder(currentDir)
    await renameFile(newPath + '-temp', newPath)
    console.log('Renamed ' + file)
  }
}

async function renameFile(currentPath, newPath) {
  return new Promise((resolve, reject) => {
    fs.rename(currentPath, newPath, err => {
      if (!err) resolve()
    })
  })
}

async function deleteFolder(dir) {
  return new Promise((resolve, reject) => {
    fs.rmdir(dir, err => {
      if (!err) resolve()
    })
  })
}
