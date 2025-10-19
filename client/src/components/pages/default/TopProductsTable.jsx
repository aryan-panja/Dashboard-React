"use client";

import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const products = [
  {
    name: "ASOS Ridley High Waist",
    price: 79.49,
    quantity: 82,
    amount: 6518.18,
  },
  {
    name: "Marco Lightweight Shirt",
    price: 128.5,
    quantity: 37,
    amount: 4754.5,
  },
  {
    name: "Half Sleeve Shirt",
    price: 39.99,
    quantity: 64,
    amount: 2559.36,
  },
  {
    name: "Lightweight Jacket",
    price: 20.0,
    quantity: 184,
    amount: 3680.0,
  },
  {
    name: "Marco Shoes",
    price: 79.49,
    quantity: 64,
    amount: 1965.81,
  },
];

export const TopProductsTable = () => {
  return (
    <Card className="h-full w-full gap-[4p] rounded-[16px] p-[24px]">
      <h1 className="text-[14px] font-[600]">Top Selling Products</h1>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="[&_th]:font-[400] [&_th]:text-[12px] [&_th]:text-muted-foreground">
            <TableRow>
              <TableHead className="w-[224px] text-left">Name</TableHead>
              <TableHead className="w-[130px] text-right">Price</TableHead>
              <TableHead className="w-[130px] text-right">Quantity</TableHead>
              <TableHead className="w-[130px] text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className={"[&_td]:font-[400] [&_td]:text-[12px]"}>
            {products.map((product, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell className="text-right">
                  ${product.price.toFixed(2)}
                </TableCell>
                <TableCell className="text-right">{product.quantity}</TableCell>
                <TableCell className="text-right font-medium">
                  ${product.amount.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};
