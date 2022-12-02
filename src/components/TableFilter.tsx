import { Column, Table as ReactTable } from "@tanstack/react-table";

const TableFilter = ({
	column,
	table,
}: {
	column: Column<any, any>;
	table: ReactTable<any>;
}) => {
	const firstValue = table
		.getPreFilteredRowModel()
		.flatRows[0]?.getValue(column.id);

	const columnFilterValue = column.getFilterValue();

	return typeof firstValue === "number" ? (
		<div>
			<input
				type='number'
				value={(columnFilterValue as [number, number])?.[0] ?? ""}
				onChange={(e) =>
					column.setFilterValue((old: [number, number]) => [
						e.target.value,
						old?.[1],
					])
				}
				placeholder='min'
			/>

			<input
				type='number'
				value={(columnFilterValue as [number, number])?.[1] ?? ""}
				onChange={(e) =>
					column.setFilterValue((old: [number, number]) => [
						old?.[0],
						e.target.value,
					])
				}
				placeholder='max'
			/>
		</div>
	) : (
		<input
			type='text'
			value={(columnFilterValue ?? "") as string}
			onChange={(e) => column.setFilterValue(e.target.value)}
			placeholder='search'
		/>
	);
};

export default TableFilter;
