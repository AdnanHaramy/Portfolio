import Slider from "./Slider";
function Translation() {
    const images = ['/book1.jpeg', '/book2.jpeg', '/book3.jpeg'];
    return (
        <section className="translation">
            <div className="translation-container">
                <div className="translation-left">
                    <h2>Translation </h2>
                    <div className="translation-paragraph-container">
                        <p>
                            I have a wealth of experience in the field of literary translation,
                            including the translation of numerous books from Arabic to English
                            and vice versa. My dedication to the craft has resulted in the successful
                            publication of several acclaimed works, expanding the reach of these
                            literary treasures to a wider audience. My translations are known for
                            their ability to capture the essence and intricacies of literary works
                            while preserving the unique voice and narrative style of  the original
                            authors. His portfolio encompasses a diverse range of genres, including
                            fiction, non-fiction, poetry, and academic texts, making each translation
                            a labor of passion and a bridge between cultures.

                        </p>
                    </div>
                </div>
                <div className="translation-right">
                    <Slider
                        images={images}
                        height={280}
                        width={200}
                        borderRadius='2%' />
                </div>
            </div>
        </section>
    );
}
export default Translation;
