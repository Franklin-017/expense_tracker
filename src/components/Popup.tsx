import { popupType } from "../Interfaces/CommonTypes";

export default function Popup({
    isPopupVisible,
    handlePopupVisibility,
    Component,
}: popupType) {
    return (
        <div
            className={`${
                isPopupVisible ? "visible" : "invisible"
            } fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-transform duration-300 w-full h-full`}
        >
            <div className="w-[400px] h-auto bg-white rounded-lg p-6 relative">
                <div
                    className="absolute top-6 right-6 cursor-pointer"
                    onClick={() => handlePopupVisibility("create")}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </div>
                <> {Component} </>
            </div>
        </div>
    );
}
