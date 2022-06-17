window.onload = () => {
    // event.1 - onclick : switch table
    $(".ant-tag").on("click", (event)=>{
        $("#span_row > .ant-tag").attr("class", "ant-tag span_button");
        $(event.target).attr("class", "ant-tag span_button ant-tag-checkable-checked");
    });
    $(".span_button").on("click", (event) => {
        for(var i=0;i<$(".span_button").length;i++){
            console.log(i);
            if( $(".span_button").eq(i).hasClass("ant-tag-checkable-checked") ){
                console.log("2");
                $(".span_table").hide();
                $(".span_table").eq(i).show();
            }
                
        }
    });
    // event.2 - mouseenter : table hover
    $("tr").on("mouseenter", (event) => {
        console.log(this);
        $(event.target.parentElement).css("background-color", "rgba(193, 215, 230, 0.6)");
    });
    // event.3 - mouseout : table hover
    $("tr").on("mouseout", (event) => {
        console.log(this);
        $(event.target.parentElement).css("background-color", "");
    });
}