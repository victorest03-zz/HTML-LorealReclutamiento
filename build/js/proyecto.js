$(()=>{
    const $listProyecto = $("#listProyecto"),
        $modalProyecto = $("#modal-postulantes")
    
    $listProyecto.DataTable({
        data : [
            {
                "nombre":"Reclutamiento de Primavera 2018",
                "area":"Area de Marketing",
                "cargo":"Ejecutivo de Venta",
                "cant":"20",
                "fechaCreacion":"19-02-2018",
                "fechaCreacion":"24-03-2018"
            }
        ],
        columns: [
            { data: "nombre", title: "Proyecto" },
            { data: "area", title: "Area" },
            { data: "cargo", title: "Cargo" },
            { data: "cant", title: "Cant. Postulantes" },
            {
                data: null,
                defaultContent:
                    "<button type='button' class='btn btn-xs btn-primary btn-verpostulante' title='Ver postulantes'>Ver Postulantes</button>",
                "orderable": false,
                "searchable": false,
            },
            { data: "fechaCreacion", title: "F. Creacion" },
            { data: "fechaCreacion", title: "F. Cierre Proceso" },
            {
                data: null,
                defaultContent:
                    "<button type='button' class='btn btn-xs btn-danger' title='Eliminar'><i class='fas fa-trash'></i></button>",
                "orderable": false,
                "searchable": false,
                "width": "26px"
            }
        ]
    }).on("click", "tbody tr td:not(:has(button))", function () {
        $modalProyecto.modal("show");
    });
    $listProyecto.on("click", ".btn-verpostulante", function () {
        $modalProyecto.modal("show");
    });
});