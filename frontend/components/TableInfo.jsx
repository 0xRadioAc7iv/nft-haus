import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

const invoices = [
  {
    invoice: "1",
    collectionName: "BaseCats",
    floorChange: "0.656",
    floorPrice: "0.33",
    volumeDown: "2%",
    volumeChange: "12%",
    items: "2K",
    owners: "23",
  },
  {
    invoice: "2",
    collectionName: "BaseWizards",
    floorChange: "0.656",
    floorPrice: "0.33",
    volumeDown: "2%",
    volumeChange: "12%",
    items: "2K",
    owners: "23",
  },
  {
    invoice: "3",
    collectionName: "DeAiJoker",
    floorChange: "0.656",
    floorPrice: "0.33",
    volumeDown: "2%",
    volumeChange: "12%",
    items: "2K",
    owners: "23",
  },
  {
    invoice: "4",
    collectionName: "Onchain giass",
    floorChange: "0.656",
    floorPrice: "0.33",
    volumeDown: "2%",
    volumeChange: "12%",
    items: "2K",
    owners: "23",
  },
  {
    invoice: "5",
    collectionName: "Based Punks",
    floorChange: "0.656",
    floorPrice: "0.33",
    volumeDown: "2%",
    volumeChange: "12%",
    items: "2K",
    owners: "23",
  },
  {
    invoice: "6",
    collectionName: "RiBt",
    floorChange: "0.656",
    floorPrice: "0.33",
    volumeDown: "2%",
    volumeChange: "12%",
    items: "2K",
    owners: "23",
  },
  {
    invoice: "7",
    collectionName: "The White Rabbit",
    floorChange: "0.656",
    floorPrice: "0.33",
    volumeDown: "2%",
    volumeChange: "12%",
    items: "2K",
    owners: "23",
  },
  {
    invoice: "8",
    collectionName: "ColourShapeBase",
    floorChange: "0.656",
    floorPrice: "0.33",
    volumeDown: "2%",
    volumeChange: "12%",
    items: "2K",
    owners: "23",
  },
  {
    invoice: "9",
    collectionName: "MoBa",
    floorChange: "0.656",
    floorPrice: "0.33",
    volumeDown: "2%",
    volumeChange: "12%",
    items: "2K",
    owners: "23",
  },
  {
    invoice: "10",
    collectionName: "Honarchy",
    floorChange: "0.656",
    floorPrice: "0.33",
    volumeDown: "2%",
    volumeChange: "12%",
    items: "2K",
    owners: "23",
  },
];

export default function TableInfo() {
  return (
    <div className="p-4 mt-4">
      <Table className="border-2 border-gray-700 rounded-full">
        <TableHeader>
          <TableRow className="p-4">
            <TableHead className="w-[100px]">#</TableHead>
            <TableHead className="px-4">COLLECTION</TableHead>
            <TableHead className="px-4">FLOOR PRICE</TableHead>
            <TableHead className="px-4">FLOOR CHANGE</TableHead>
            <TableHead>VOLUME ↓</TableHead>
            <TableHead>VOLUME CHANGE</TableHead>
            <TableHead>ITEMS</TableHead>
            <TableHead>OWNERS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium ">{invoice.invoice}</TableCell>
              <TableCell className="px-4">{invoice.collectionName}</TableCell>
              <TableCell className="px-4">{invoice.floorPrice}</TableCell>
              <TableCell className="px-4">{invoice.floorChange}</TableCell>
              <TableCell className="px-4">{invoice.volumeDown}</TableCell>
              <TableCell className="px-4">{invoice.volumeChange}</TableCell>
              <TableCell className="px-4">{invoice.items}</TableCell>
              <TableCell className="px-4">{invoice.owners}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
