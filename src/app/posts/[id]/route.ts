import { data } from "../data";

export async function DELETE(request: Request,{params}:{params:Promise<{id: string}>}){
    const {id} = await params;
    const index = data.findIndex((post)=> post.id === parseInt(id));
    const deletedPost = data.splice(index,1);
    return Response.json(deletedPost);
}