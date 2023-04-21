
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';


 
const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = [];
    for (const key in errorObj.errors) {
        if (Object.hasOwnProperty.call(errorObj.errors, key)) {
            const element = errorObj.errors[key];
            if (element?.message) {
                errMsg.push(element.message);
            }
        }
    }
    return errMsg.length ? errMsg : errorObj.message ? errorObj.message : null;
};

const ProgramCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");

    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        set_entity({})
    },[props.show])
    const onSave = async () => {
        let _data = {
            programid: _entity.programid,
            programname: _entity.programname,
            programdes: _entity.programdes,
            programduration: _entity.programduration

        };

        setLoading(true);
        try {
            const result = await client.service("program").create(_data);
            props.onHide();
            props.alert({ type: "success", title: "Create", message: "Created successfully" });
            props.onCreateResult(result);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create" });
        }
        setLoading(false);
    };

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError("");
    };

    return (
        <Dialog header="Create" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div role="program-create-dialog-component">
                <div>
                    <p className="m-0" >programid:</p>
                    <InputText className="w-full mb-3" value={_entity?.programid} onChange={(e) => setValByKey("programid", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Program Name:</p>
                    <InputText className="w-full mb-3" value={_entity?.programname} onChange={(e) => setValByKey("programname", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Program Description:</p>
                    <InputText className="w-full mb-3" value={_entity?.programdes} onChange={(e) => setValByKey("programdes", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Program Duration:</p>
                    <InputText className="w-full mb-3" value={_entity?.programduration} onChange={(e) => setValByKey("programduration", e.target.value)}  />
                </div>


                <small className="p-error">
                    {Array.isArray(error)
                        ? error.map((e, i) => (
                              <p className="m-0" key={i}>
                                  {e}
                              </p>
                          ))
                        : error}
                </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    //
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(null, mapDispatch)(ProgramCreateDialogComponent);
// createDialog_code.template
