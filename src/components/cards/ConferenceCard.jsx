const m = require("mithril");

import ConferenceField from "./ConferenceField.jsx";

const ConferenceCard = {
    view: ({ attrs }) => (
    <div class="conference-card">
        <div class="conference-fields">
            <ConferenceField
            fieldValue={`${attrs.conference.name} @ ${attrs.conference.location}`}
            />
            <ConferenceField fieldValue={<i class="fas fa-star" />} />
            </div>
            <div class ="conference-fields">
            <ConferenceField fieldValue={attrs.conference.date} />
            <ConferenceField fieldValue={`19 d 20 hr 45m`} />
        </div>
    </div>
    )
};

export default ConferenceCard;