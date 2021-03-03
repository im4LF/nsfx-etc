'use strict'

module.exports = {
    _in(message, done) {
        if (this.locked) {
            this.logger.info({ locked: this.locked }, this.name + '_in')
            this.send('pass', message, done)
        }
        else {
            this.locked = true
            this.send('out', message, done)
        }
    },
    out_: 1,
    pass_: 1,
    _unlock(message, done) {
        this.logger.info(message, this.name + '_reset')
        this.locked = false
        done()
    }
}