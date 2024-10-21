import React, { useState } from "react";
import { cn } from "../../utils/utils";
import { CaretDown } from "@phosphor-icons/react";

const BaseDropdown = ({
  toggleHandler,
  dropdownContent
}: {
    toggleHandler: string | React.ReactNode;
    dropdownContent: React.ReactNode;
}) => {
	const [showDropdown, setShowDropdown] = useState<boolean>(false);

	const showDropdownContent = () => {
		setShowDropdown((prevState: boolean) => !prevState);
	};

	return (
		<div
			className={cn(
				"relative flex items-center justify-center gap-4 cursor-pointer border rounded-md px-2 w-[150px] py-3"
			)}
			onClick={showDropdownContent}
		>
			<div>{toggleHandler}</div>
			<div className="m-0 p-0 flex items-center justify-center">
				<CaretDown size={20} />
			</div>

			<div
				className={cn(
					"absolute z-[1000] left-[-50%] min-w-[300px] flex flex-col gap-2 transform overflow-hidden top-[calc(100%_+_5px)] border rounded-md px-2 py-3 transition-all duration-300 ease-in-out",
					{ "opacity-0 max-h-0 pointer-events-none": !showDropdown },
					{ "opacity-100 max-h-screen": showDropdown }
				)}
			>
				{dropdownContent}
			</div>
		</div>
	);
};

export default BaseDropdown;
