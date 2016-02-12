import chai           from 'chai';
import namedArguments from '../../lib/utils/named_arguments';

chai.should();

describe('namedArguments', () => {

  it('should return an object ignoring the keys _ and $0', () => {
    const testObj = {
      _: 'foo',
      $0: 'bar',
      baz: 'bat'
    };

    namedArguments(testObj).should.deep.equal({
      baz: 'bat'
    });
  });

});
