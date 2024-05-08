import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutCardAboutCard extends Schema.Component {
  collectionName: 'components_about_card_about_cards';
  info: {
    displayName: 'About Card';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.Text;
    icon: Attribute.Media;
  };
}

export interface AboutListAboutList extends Schema.Component {
  collectionName: 'components_about_list_about_lists';
  info: {
    displayName: 'About List';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface AboutTableAboutTable extends Schema.Component {
  collectionName: 'components_about_table_about_tables';
  info: {
    displayName: 'About Table';
  };
  attributes: {
    value: Attribute.String;
    behavior: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about-card.about-card': AboutCardAboutCard;
      'about-list.about-list': AboutListAboutList;
      'about-table.about-table': AboutTableAboutTable;
    }
  }
}
