"use client";

export default function Search() {
    function search(e: any) {
        if(e.keyCode === 13) {
            var zoekveld = document.getElementById('stadSearch') as HTMLInputElement;
            var zoekVal = zoekveld.value;
            if(zoekVal.trim() == "") {
                alert('Het invoerveld kan niet leeg blijven.');
            } else {
                window.location.href = `/komendedagen/${zoekVal}`;
            }
        }
    }

    function klikSearch() {
        var zoekveld = document.getElementById('stadSearch') as HTMLInputElement;
        var zoekVal = zoekveld.value;
        if(zoekVal.trim() == "") {
            alert('Het invoerveld kan niet leeg blijven.');
        } else {
            window.location.href = `/komendedagen/${zoekVal}`;
        }
    }

    return (
        <div className="center">
            <div className="flex justify-center align-middle items-center gap-3 mt-4 w-full lg:w-1/2">
                <input 
                    type="search" 
                    placeholder="Stad zoeken..." 
                    id="stadSearch" 
                    className="bg-white p-3 rounded-full w-full focus:border-cyan-100" 
                    onKeyDown={search} 
                />
                <button 
                    onClick={klikSearch} 
                    className="rounded-full bg-slate-400 h-[48px] w-[48px] flex justify-center items-center"
                >
                    <img src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png" alt="" height={25} width={25} />
                </button>
            </div>
        </div>
    )
}