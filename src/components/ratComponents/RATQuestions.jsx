import React from "react";
import DraggableNumberContainer from "../DraggableNumberContainer";
import DroppableInputContainer from "../DroppableInputContainer";
import { useTranslation } from "react-i18next";

function RATQuestions({ data, currentSetId, handleDataChange }) {
  /* i18n translation utility */
  const { t } = useTranslation();

  //FIXME: move into a seperate file
  const options = ["helper", "influence", "autonomy"];

  return (
    <div>
      <h1 className="md:text-xl font-semibold text-center my-4">
        {t(`data.rat.${currentSetId}.statement`)}
      </h1>
      <div className="space-y-4" data-testid="draggableNumberContainer">
        <DraggableNumberContainer
          amount={10}
          data={data}
          currentSetId={currentSetId}
          test={"RAT"}
        />
      </div>
      <div className="flex my-8" data-testid="droppableInputContainer">
        <ul className="flex flex-col md:flex-row w-full">
          <DroppableInputContainer
            data={data}
            currentSetId={currentSetId}
            handleDataChange={handleDataChange}
            options={options}
            test={"RAT"}
          />
        </ul>
      </div>
    </div>
  );
}

export default RATQuestions;
