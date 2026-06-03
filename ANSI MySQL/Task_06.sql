SELECT 
    e.title AS event_title,
    SUM(CASE WHEN r.resource_type = 'pdf' THEN 1 ELSE 0 END) AS total_pdfs,
    SUM(CASE WHEN r.resource_type = 'image' THEN 1 ELSE 0 END) AS total_images,
    SUM(CASE WHEN r.resource_type = 'link' THEN 1 ELSE 0 END) AS total_links,
    COUNT(r.resource_id) AS grand_total_resources
FROM events e
LEFT JOIN resources r ON e.event_id = r.event_id
GROUP BY e.event_id, e.title;
