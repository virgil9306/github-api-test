import React from 'react';
// Styling
import './List.css';
// Types
import { TGitHubUser, TGitHubItem } from '../../types';

type TListProps = {
  items: Array<TGitHubItem>,
};

type TListItemProps = {
  title: string,
  state: string,
  url: string,
  user: TGitHubUser,
};

const ListItem = ({ title, url, state, user: { id } }: TListItemProps) => (
  <li>
    <a href={url}>
      <span>{title}</span>
      <span>{state}</span>
      <span>{id}</span>
    </a>
  </li>
);

const List = ({ items }: TListProps) => {
  return (<ul>
    { items.map(({id, ...item}) => <ListItem key={id} {...item} />) } 
  </ul>);
};

export default List;
