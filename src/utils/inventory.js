export const mapProductAndInventoryObjectToInventory = (
  product,
  inventory,
  feeData
) => {
  const productObject = {
    binLocation: inventory?.binLocation,
    brand: product?.brand,
    categoryId: product?.categoryId,
    companyId: product?.companyId,
    condition: product?.condition,
    cost: inventory?.cost,
    createdAt: product?.createdAt,
    id: product?.id,
    image: product?.image,
    isActive: product?.isActive,
    lowstock: inventory?.qty < inventory?.minQty,
    measurement: product?.measurement,
    minQty: inventory?.minQty,
    markup: inventory?.markup,
    notes: inventory?.notes,
    description: product?.description,
    outofstock: inventory?.qty < 1,
    qty: inventory?.qty,
    retail: inventory?.retail,
    seasonality: product?.seasonality,
    sku: product?.sku,
    subCategoryId: product?.subCategoryId,
    updatedAt: product?.updatedAt,
    vendor: inventory?.vendor,
    tireCondition: inventory?.tireCondition,
    warranty: inventory?.warranty,
    feeid: feeData?.map((fee) => fee.id)?.join(',') || '',
  };
  return productObject;
};

export const convertDataforCsv = (headings, rows, categoryId) => {
  headings?.pop();
  const columnNames = headings?.map((item) => {
    return { label: item.label, key: item.label };
  });
  const dataRows = rows?.map((item, index) => {
    if (categoryId === 1) {
      return {
        'Sr#': index++,
        SKU: item.sku,
        Brand: item.brand,
        Description: item.description,
        Size: item.measurement,
        Seasonality: item.seasonality,
        //wheels bolt pattern
        'Sub Category': item.subCategoryId || '--',
        'Cost/Product': item.cost,
        QTY: item.qty,
        Vendor: item.vendor,
        'Bin Location': item.binLocation,
      };
    } else if (categoryId === 2) {
      return {
        'Sr#': index++,
        SKU: item.sku,
        Brand: item.brand,
        Description: item.description,
        Size: item.measurement,
        'Centre Bor': item.seasonality,
        'Bolt Pattern': item.condition,
        //wheels bolt pattern
        'Sub Category': item.subCategoryId || '--',
        'Cost/Product': item.cost,
        QTY: item.qty,
        Vendor: item.vendor,
        'Bin Location': item.binLocation,
      };
    } else if (categoryId === 3) {
      return {
        'Sr#': index++,
        'SKU/Part Number': item.sku,
        'Brand/Manufacturer': item.brand,
        Description: item.description,
        'Cost/Product': item.cost,
        'Retail Price': item.retail,
        QTY: item.qty,
        'Critical QTY': item.minQty,
        Vendor: item.vendor,
        'Bin Location': item.binLocation,
      };
    } else {
      return {
        'Sr#': index++,
        'Labor Name/Description': item.name,
        'Service Hours': item.hours,
        Price: item.price,
      };
    }
  });
  return { dataRows, columnNames };
};

export const filterByStock = {
  lowStock: 'Low Stock',
  outOfStock: 'Out of Stock',
};
