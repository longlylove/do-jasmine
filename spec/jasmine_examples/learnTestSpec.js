
describe('A suite is just a function', function(){
    var a;

    it('and so is a spec', function(){
        a = true;

        expect(a).toBe(true);
    });
});

describe('The "toBe" matcher compares with ===', function(){
    it('and has a positive case', function(){
        expect(true).toBe(true);
    });
    
    it('and can have a negative case ', function() {
        expect(false).not.toBe(true);
    });
        
});

describe('A suite with some shared setup', function() {
    var foo = 0;
    
    beforeEach(function() {
        foo += 1;
    });

    
    afterEach(function() {
        foo = 0;
    });
        
    // beforeAll(function() {
    //     foo = 1;
    // });

    // afterAll(function() {
    //     foo = 0;
    // });
    
    describe('When performing operation: foo', function() {
        
        it('plus 1 equals to 1', function() {
            this.foo + 1 === 2
        });

        
        it('minus 1 equals to -1', function() {
            this.foo -1 === -1
        });        
    });
        
});
    