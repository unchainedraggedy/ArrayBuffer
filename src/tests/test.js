import { getBuffer, ArrayBufferConverter } from '../index'

test('buffer to string', () => {
    const buffer = getBuffer();
    const converter = new ArrayBufferConverter();

    converter.load(buffer);

    expect(converter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}')
})