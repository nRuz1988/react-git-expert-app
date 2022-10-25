const { render,screen } = require("@testing-library/react");
import {GifExpertApp} from '../src/GifExpertApp';

describe('Test Component GifExpertApp ', ()=>{

    test('Test  validando texto H1', () =>{

        render(<GifExpertApp />);
        //screen.debug();
        expect(screen.getByText('GifExpertApp'));
    });
});