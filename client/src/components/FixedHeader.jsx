import { Affix, Button } from "antd";

export const FixedHeader = ({ title, buttonTitle, handleOnClick }) => {
    return (
        <>
            <Affix offsetTop={0}>
                <div
                    style={{
                        height: "50px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: "white",
                    }}
                >
                    <h1 style={{ margin: "0px" }}> {title} </h1>
                    <Button type="primary" onClick={handleOnClick}>
                        {buttonTitle}
                    </Button>
                </div>
            </Affix>
        </>
    );
};
