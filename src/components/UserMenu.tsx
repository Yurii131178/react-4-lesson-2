import { FiUser } from "react-icons/fi";
import css from "./UserMenu.module.css"

interface UserMenuProps {
    name: string;
}

export default function UserMenu({name}: UserMenuProps) {
    return (
        <div>
            <FiUser className={css.icon} size={24}/>{name}
        </div>
    )
    

}