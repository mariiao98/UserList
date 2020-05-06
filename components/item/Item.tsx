import * as React from 'react';
import { Rating, Image, List } from 'semantic-ui-react';

interface IProps {
    name?: string;
    img?: string;
    rate?: number;
}

const Item = 