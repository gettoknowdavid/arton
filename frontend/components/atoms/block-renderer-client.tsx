"use client";
import {type BlocksContent, BlocksRenderer} from "@strapi/blocks-react-renderer";

export default function BlockRendererClient({content}: { readonly content: BlocksContent }) {
    if (!content) return null;
    return <BlocksRenderer
        content={content}
        blocks={{
            list: (props) => {
                return (<ul className="list-disc list-outside ml-4">{props.children}</ul>);
            },
            "list-item": (props) => {
                return (<li className="text-wrap text-sm">{props.children}</li>)
            },
        }}
    />;
}