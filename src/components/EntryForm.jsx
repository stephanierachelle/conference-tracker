//src/components/EntryForm.jsx

const m = require("mithril");

import UIButton from "./ui/UIButton.jsx";

import { setMockData } from "../store/data"

const entryFormHandler = entryForm => {
  const formData = new FormData(entryForm);
  const newEntry = {};

  Array.from(formData.entries()).map(entryValue => {
    const key = entryValue[0];
    const value = entryValue[1];

    switch (value) {
      case "false":
        newEntry[key] = false;
        break;
      case "true":
        newEntry[key] = true;
        break;
      default:
        newEntry[key] = value;
        break;
    }
  });
  
    console.log(newEntry);

  newEntry["favorite"] = false;
  newEntry["CFPCompleted"] = newEntry.CFP ? false : "null";

  // We'll push new conference data from here
  setMockData(newEntry);

  entryForm.reset();
};


const EntryForm = {
     data: {        //State of EntryForm component
        CFP: false
    },
    view: vnode => (
        <form name="entry-form" id="entry-form">
        {/* ... */}
      <label for="conf-name">
        {`Conference Name`}
      </label>
      <input id="conf-name" type="text" name="name" />
      <label for="location">
        {`Location`}
      </label>
      <input id="location" type="text" name="location" />
      <label for="date">
        {`Date`}
      </label>
      <input id="date" type="text" name="date" />

        <label class="form-question">
        {`submitting paper?`}
        <label for="yes-cfp">Yes</label>
        <input 
        value={true} 
        type="radio" 
        id="yes-cfp" 
        name="CFP" 
        onclick={() => {
            vnode.state.CFP = true;
        }}
        />
        <label for="no-cfp">No</label>
        <input
            value={false}
            type="radio"
            id="no-cfp"
            name="CFP"
            onclick={() => {
                vnode.state.CFP = false;  
        }}
        />
        </label>
        {vnode.state.CFP
            ? [
            <label for="cfp">{`Call for Papers Dealine`}</label>,
            <input id="cfp" type="text" name="CFPDate" />
            ]
        : null}
        <UIButton action={() => entryFormHandler(vnode.dom)} buttonName="SAVE" />
        </form>
    )
};

export default EntryForm;