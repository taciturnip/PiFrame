/*
Javascript circular buffer
Author: Aaron Dallas
*/


class CircularBuffer {
    constructor(max_length) {
        this.max_length = max_length;
        this.buffer = [];
        this.read_index = 0;
        this.write_index = 0;
    }

    getLength() { return this.buffer.length; }

    append(obj) {
        if(this.buffer.length === this.max_length)
            this.write_index = 0;

        if(this.write_index === this.getLength()) {
            this.buffer.push(obj);
        }
        else {
            this.buffer[this.write_index] = obj;
        }
        this.write_index++;
    }

    getCurr() {
        if(!this.getLength())
            throw new Error("Buffer is empty");

        return this.buffer[this.read_index];
    }

    getNext() {
        if(!this.getLength())
            throw new Error("Buffer is empty");

        this.read_index++;
        if(this.read_index == this.getLength())
            this.read_index = 0;

        return this.buffer[this.read_index]
    }

    getPrev() {
        if(!this.getLength())
            throw new Error("Buffer is empty");

        this.read_index--;
        if(this.read_index < 0)
            this.read_index = this.getLength() - 1;

        return this.buffer[this.read_index];
    }
}