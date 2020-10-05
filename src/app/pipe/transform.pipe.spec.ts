import { pipe } from 'rxjs';
import { TransformPipe } from "./transform.pipe";

describe('Pipe: TransformPipe', () => {
    let pipe: TransformPipe;
  
    beforeEach(() => {
      pipe = new TransformPipe();
    });

    it('should create', () => {
        expect(pipe).toBeTruthy();
      });
    
    it('givenValidValue_thenReturnValidMessage_whenTransforMethodInvoked', () => {
        expect(pipe.transform('Hello','Heloo')).toBeTruthy('go to view page');
      });
    it('givenValidValueWithEmpy_thenReturnValidMessage_whenTransforMethodInvoked', () => {
        expect(pipe.transform('Hello','')).toBeTruthy('go to view page');
      });
    it('givenBothEmpy_thenReturnInvalidUndefined_whenTransforMethodInvoked', () => {
        expect(pipe.transform('','')).toBeUndefined;
      });
  });

 