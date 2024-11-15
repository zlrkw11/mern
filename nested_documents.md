# Nested Document
```
{
    "name": "lancer evo"
    "year": 2016
    "price": 50000
    "reviews": [
        {"title": "good car!", "body": "low oil consumption, high price but worth it"},
        {"title": "okay car", "body": "it's overall average..."}
    ]
}
```
a list of reviews documents for that specific car are also fetched when we fetched the car document.

to fetch a review, we need just 1 query at once.

## $in and $nin
