import * as React from 'react';
import Item from "./.";
import * as renderer from 'react-test-renderer';
import users from '../../../mockdata/users';

it('snapshot Item component', () => {
    const tree = renderer
        .create(<Item name={users[0].name} rate={users[0].rate} img={users[0].img} key={users[0].id} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});