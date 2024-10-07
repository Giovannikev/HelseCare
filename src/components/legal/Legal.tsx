import Claims from "./claims"
import Policies from "./Policies"
import PrivacyPolicy from "./PrivacyPolicy"
import TermsAndConditions from "./TermsConditions"

export default function Legal() {
    return(
        <div className="flex flex-col sm:flex-row sm:flex-wrap py-10">
            <Claims />
            <Policies />
            <PrivacyPolicy />
            <TermsAndConditions />
        </div>
    )
}