const m = require("mithril");

const ConferenceCard = {
    view: ({ attrs }) => (
    <div class="conference-card">
        <div class="conference-fileds">
            <span>
            {attrs.conference.name} @ {attrs.conference/location}
            </span>
                <i class="fas fa-star" />
            </div>
            <div class ="conference-fields">
            <span>{attrs.conference.date}</span>
            <span>{`19 d 20 hr 45m`}</span>
        </div>
    </div>
    )
};

export default ConferenceCard;