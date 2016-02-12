import chai                from 'chai';
import createTemplateRegex from '../../lib/utils/create_template_regex';

chai.should();

describe('createTemplateRegex', () => {

  it('should return a regex for identifying a property name in the template string', () => {
    const regex = createTemplateRegex('test');
    const testString = 'abcdefg<% test %>ijklmnop';

    testString.replace(regex, 'h').should.equal('abcdefghijklmnop');
  });

});
