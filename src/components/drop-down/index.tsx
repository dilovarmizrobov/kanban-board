import React, {useCallback, useEffect, useRef, useState} from 'react';
import {DropDownContainer, DropDownHeader, DropDownList, DropDownListContainer, DropDownTitle,
    ListItem} from "./styles";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import ArrowUpIcon from "../icons/ArrowUpIcon";

const DropDown: React.FC<{options: string[]}> = ({options}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string>(options[0]);
    const ref = useRef<HTMLDivElement>(null);

    const onOptionClicked = (value: string) => () => {
        setSelectedOption(value);
        setIsOpen(false);
    };

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (!ref.current!.contains(event.target as Node)) {
            setIsOpen(false);
        }
    }, [ref])

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("click", handleClickOutside);
        } else {
            document.removeEventListener("click", handleClickOutside);
        }
    }, [handleClickOutside, isOpen])

    return (
        <DropDownContainer ref={ref}>
            <DropDownHeader isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                <DropDownTitle>{selectedOption}</DropDownTitle>
                {isOpen ? <ArrowUpIcon color='#8C939F'/> : <ArrowDownIcon color='#8C939F'/>}
            </DropDownHeader>
            {isOpen && (
                <DropDownListContainer>
                    <DropDownList>
                        {options.map((option, index) => (
                            <ListItem onClick={onOptionClicked(option)} key={index} isActive={option === selectedOption}>
                                {option}
                            </ListItem>
                        ))}
                    </DropDownList>
                </DropDownListContainer>
            )}
        </DropDownContainer>
    );
};

export default DropDown;
