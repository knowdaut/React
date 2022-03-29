
import { utcConverter, dayConverter } from '../Utils/Converters.js';

test('should return number 0-7', () => {
    const utcTest = utcConverter(1648575895);
    expect(utcTest).toBe(2);
})

test("should return day of week", () =>{
    const dayTest = dayConverter(2);
    expect(dayTest).toBe("Tuesday");
})