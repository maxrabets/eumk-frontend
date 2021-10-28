import React, { FC, useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { subjectsService } from "domains/subjects";
import { IEUMK } from "domains/subjects/shared/type";

const EumkPage: FC = () => {
    const { eumkId } = useParams<{ eumkId: string }>();
    const [ eumk, setEumk ] = useState<IEUMK | null>(null);

    useEffect(() => {
        setEumk(subjectsService.getEUMK(eumkId));
    }, [ eumkId ]);

    return (
        <>
            <h3>{ eumk?.name }</h3>
            <ul>
                {
                    eumk?.sections.map(section => {
                        return (
                            <li key={ section.id }>
                                    { section.name }
                            </li>
                        );
                    })
                }
            </ul>
        </>
    );
};

export default EumkPage;
