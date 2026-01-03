import type { Schema, Struct } from '@strapi/strapi';

export interface ProductsDimensionData extends Struct.ComponentSchema {
  collectionName: 'components_products_dimension_data';
  info: {
    displayName: 'Dimension Data';
  };
  attributes: {
    height: Schema.Attribute.Integer;
    length: Schema.Attribute.Decimal;
    unit: Schema.Attribute.Enumeration<['inches', 'cm']> &
      Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface ProductsMediaItem extends Struct.ComponentSchema {
  collectionName: 'components_products_media_items';
  info: {
    displayName: 'Media Item';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<['image', 'video']> &
      Schema.Attribute.DefaultTo<'image'>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductsProductCarePanel extends Struct.ComponentSchema {
  collectionName: 'components_products_product_care_panels';
  info: {
    displayName: 'Product Care Panel';
  };
  attributes: {
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    introduction: Schema.Attribute.Blocks;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductsSizeSku extends Struct.ComponentSchema {
  collectionName: 'components_products_size_skus';
  info: {
    displayName: 'Size SKU';
  };
  attributes: {
    available: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    color: Schema.Attribute.String;
    mediaUrl: Schema.Attribute.String;
    size: Schema.Attribute.String & Schema.Attribute.Required;
    skuId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    stock: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'products.dimension-data': ProductsDimensionData;
      'products.media-item': ProductsMediaItem;
      'products.product-care-panel': ProductsProductCarePanel;
      'products.size-sku': ProductsSizeSku;
    }
  }
}
