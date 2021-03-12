'use strict'

module.exports = {
    alldone_: 1,
    out_: 1,
    _in(message, done) {

        if (!this.__waitCounter) this.__waitCounter = 0
        this.__waitCounter++
        this.logger.debug({ counter: this.__waitCounter }, this.name + '_in')
        this.send('out', message, done)
    },
    _done(message, done) {

        this.__waitCounter--
        this.logger.debug({ counter: this.__waitCounter }, this.name + '_done')
        if (this.__waitCounter == 0) {
            this.logger.debug({ counter: this.__waitCounter }, this.name + '_alldone')
            this.send('alldone', message)
        }
        
        done()
    }
}