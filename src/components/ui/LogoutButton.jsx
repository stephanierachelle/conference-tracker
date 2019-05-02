const m = require("mithril");

const logoutButton = {
    view: ({ attrs }) => (
        <div onclick={attrs.action}>
        <i class="fas fa-sign-out-alt"/> 
        </div>
    )
};

export default logoutButton;