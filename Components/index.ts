import CustomButton from "./Button";

export interface ExportsI {
    CustomButton: typeof CustomButton
}

const Exports = {
    CustomButton
}

export default Exports