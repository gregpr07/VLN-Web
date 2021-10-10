import {
  DocumentRemoveIcon,
  PlayIcon,
  TrashIcon,
  UserRemoveIcon,
} from "@heroicons/react/solid";
import { formatTime } from "@services/functions";
import ButtonBlack from "./ButtonBlack";

//! move this to components
interface INote {
  timestamp: number;
  note: string;
  id: number;
}

const Note = ({ note }: { note: INote }) => (
  <div className="p-4 bg-gray-50">
    <div className="grid grid-flow-col col-span-2 items-center space-between w-full pb-2">
      <div className="flex flex-row items-center gap-2 ">
        <PlayIcon className="h-6" />
        <p className="text-gray-900 text-sm leading-5 font-semibold">
          {formatTime(note.timestamp)}
        </p>
      </div>
      <div className="justify-self-end flex flex-row gap-2 items-center text-gray-400">
        <p>Delete</p>
        <TrashIcon className="h-6" />
      </div>
    </div>
    <p className="text-gray-500 text-xs leading-4 font-normal">{note.note}</p>
  </div>
);

const Notes = ({ notes }: { notes: INote[] }) => (
  <div>
    {/* Add comment */}
    <div className="bg-gray-50 flex flex-row py-2 px-2 rounded-md gap-1.5">
      <div className="flex-grow">
        <input
          className="h-10 bg-transparent px-2 font-normal leading-5 text w-full text-sm"
          placeholder="Add new note here"
        />
      </div>
      <div>
        <ButtonBlack text="Add note" />
      </div>
    </div>

    {/* Comments */}
    <div className="grid grid-flow-row gap-2 pt-2">
      {notes.map((note, index) => (
        <Note note={note} key={index} />
      ))}
    </div>
  </div>
);

export default Notes;
