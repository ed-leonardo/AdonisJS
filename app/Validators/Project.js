'use strict'

const Antl = use('Antl')

class Project {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      title: 'required|unique:projects',
      description: 'required'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = Project
